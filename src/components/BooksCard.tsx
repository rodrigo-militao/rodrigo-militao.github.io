import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import type { BookItem, I18nString } from '../content-types';

function StatusBadge({ status }: { status?: 'reading' | 'read' | 'want-to-read' }) {
  if (!status) return null;

  const config: Record<string, { icon: React.ReactNode; color: string }> = {
    reading: { icon: <AutoStoriesIcon sx={{ fontSize: 14 }} />, color: '#3b82f6' },
    read: { icon: <CheckCircleIcon sx={{ fontSize: 14 }} />, color: '#22c55e' },
    'want-to-read': { icon: <BookmarkAddIcon sx={{ fontSize: 14 }} />, color: '#f59e0b' },
  };

  const c = config[status];
  return (
    <Box
      sx={{
        position: 'absolute',
        top: -4,
        right: -4,
        width: 22,
        height: 22,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: (theme) => theme.palette.background.paper,
        border: '1px solid',
        borderColor: 'divider',
        color: c.color,
      }}
    >
      {c.icon}
    </Box>
  );
}

export default function BooksCard({ book }: { book: BookItem }) {
  const content = (
    <>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        {book.coverUrl ? (
          <Avatar
            src={book.coverUrl}
            alt={book.title}
            variant="rounded"
            sx={{ width: 80, height: 110, borderRadius: 1 }}
          >
            {book.title.charAt(0)}
          </Avatar>
        ) : (
          <Avatar
            variant="rounded"
            sx={{
              width: 80,
              height: 110,
              bgcolor: 'transparent',
              border: '1px solid',
              borderColor: 'divider',
              color: 'text.secondary',
              fontSize: '1.5rem',
              fontWeight: 600,
            }}
          >
            {book.title.charAt(0)}
          </Avatar>
        )}
        <StatusBadge status={book.status} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="caption" color="text.primary" sx={{ display: "block", fontWeight: 600, lineHeight: 1.3 }}>
          {book.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
          {book.author}
        </Typography>
      </Box>
    </>
  );

  if (book.url) {
    return (
      <Box
        component="a"
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          textDecoration: 'none',
          color: 'inherit',
          gap: 1,
          p: 1.5,
          borderRadius: 1,
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
          },
        }}
      >
        {content}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
        p: 1.5,
      }}
    >
      {content}
    </Box>
  );
}
