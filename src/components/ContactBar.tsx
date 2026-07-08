import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import type { ContactData } from '../content-types';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="text.secondary"
      underline="hover"
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.8rem' }}
    >
      {icon}
      {label}
    </Link>
  );
}

export default function ContactBar({ contact }: { contact: ContactData }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, alignItems: 'center' }}>
      {contact.email && (
        <ContactLink href={`mailto:${contact.email}`} icon={<MailIcon sx={{ fontSize: 18 }} />} label="Email" />
      )}
      {contact.linkedin && (
        <ContactLink href={contact.linkedin} icon={<LinkedInIcon sx={{ fontSize: 18 }} />} label="LinkedIn" />
      )}
      {contact.github && (
        <ContactLink href={contact.github} icon={<GitHubIcon sx={{ fontSize: 18 }} />} label="GitHub" />
      )}
      {contact.substack && (
        <ContactLink href={contact.substack} icon={<LanguageIcon sx={{ fontSize: 18 }} />} label="Blog" />
      )}
    </Box>
  );
}
