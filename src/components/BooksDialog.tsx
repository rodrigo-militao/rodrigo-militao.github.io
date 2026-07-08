import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import BooksCard from './BooksCard';
import type { BookItem } from '../content-types';

export default function BooksDialog({ open, onClose, books, title }: { open: boolean; onClose: () => void; books: BookItem[]; title: string }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          {books.map((book, i) => (
            <Grid key={book.title + '-bk-' + i} size={{ xs: 6, sm: 4 }}>
              <BooksCard book={book} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
