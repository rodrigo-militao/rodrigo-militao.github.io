import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { t } from '../content-types';
import ExperienceCard from './ExperienceCard';
import SkillsCategory from './SkillsCategory';
import AchievementCard from './AchievementCard';
import BlogCard from './BlogCard';
import ContactBar from './ContactBar';
import BooksCard from './BooksCard';
import BooksDialog from './BooksDialog';
import type {
  Section as SectionType,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  AchievementSection,
  BlogSection,
  BooksSection,
  ContactSection,
} from '../content-types';

function SectionHeader({ title, moreUrl, moreLabel, onMore }: { title: string; moreUrl?: string; moreLabel?: string; onMore?: () => void }) {
  if (!moreUrl && !moreLabel) {
    return (
      <Typography variant="overline" color="text.secondary" gutterBottom sx={{ display: "block" }}>
        {title}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
      <Typography variant="overline" color="text.secondary">
        {title}
      </Typography>
      {moreUrl && (
        <Link href={moreUrl} target="_blank" rel="noopener noreferrer" color="text.secondary" underline="hover"
          sx={{ fontSize: '0.7rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 0.25, verticalAlign: 'middle' }}>
          More<OpenInNewIcon sx={{ fontSize: 10 }} />
        </Link>
      )}
      {moreLabel && !moreUrl && (
        <Box component="button" onClick={onMore}
          sx={{ background: 'none', border: 'none', cursor: 'pointer', color: 'text.secondary', fontSize: '0.7rem', fontWeight: 500, p: 0, '&:hover': { textDecoration: 'underline' } }}>
          {moreLabel}
        </Box>
      )}
    </Box>
  );
}

function renderByType(section: SectionType, language: 'en' | 'pt', onMoreBooks?: () => void) {
  switch (section.type) {
    case 'about':
      return (
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
          {t((section as AboutSection).body, language)}
        </Typography>
      );

    case 'experience':
      return (section as ExperienceSection).items.map((item) => (
        <ExperienceCard key={item.company + item.dateRange} item={item} language={language} />
      ));

    case 'skills':
      return (section as SkillsSection).categories.map((cat, i) => (
        <SkillsCategory key={cat.category.en + '-cat-' + i} category={cat} language={language} />
      ));

    case 'achievements':
      return (
        <Grid container spacing={2}>
          {(section as AchievementSection).items.map((item, i) => (
            <Grid key={'ach-' + i} size={{ xs: 12, sm: 6 }}>
              <AchievementCard item={item} language={language} />
            </Grid>
          ))}
        </Grid>
      );

    case 'blog':
      return (section as BlogSection).items.map((item) => (
        <BlogCard key={item.url} item={item} language={language} />
      ));

    case 'books': {
      const allBooks = (section as BooksSection).items;
      const visible = allBooks.slice(0, 4);
      return (
        <>
          <Grid container spacing={2}>
            {visible.map((book, i) => (
              <Grid key={book.title + '-bk-' + i} size={{ xs: 6, sm: 3 }}>
                <BooksCard book={book} />
              </Grid>
            ))}
          </Grid>
          {allBooks.length > 4 && (
            <Box sx={{ textAlign: 'center', mt: 1.5 }}>
              <Box component="button" onClick={onMoreBooks}
                sx={{ background: 'none', border: 'none', cursor: 'pointer', color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500, p: 0.5, '&:hover': { textDecoration: 'underline' } }}>
                View all {allBooks.length} books
              </Box>
            </Box>
          )}
        </>
      );
    }

    case 'contact':
      return <ContactBar contact={(section as ContactSection).data} />;

    default:
      return null;
  }
}

export default function Section({ section, language }: { section: SectionType; language: 'en' | 'pt' }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box sx={{ pt: 3 }}>
      {section.type === 'blog' && (
        <SectionHeader title={t(section.title, language)} moreUrl={(section as BlogSection).moreUrl} />
      )}
      {section.type === 'books' && (
        <SectionHeader title={t(section.title, language)} moreLabel="More" onMore={() => setDialogOpen(true)} />
      )}
      {section.type !== 'blog' && section.type !== 'books' && (
        <SectionHeader title={t(section.title, language)} />
      )}
      {renderByType(section, language, () => setDialogOpen(true))}

      {section.type === 'books' && (
        <BooksDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          books={(section as BooksSection).items}
          title={t(section.title, language)}
        />
      )}
    </Box>
  );
}
