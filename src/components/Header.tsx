import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Link, Typography, Avatar, Button } from '@mui/material';
import Context from "./Context"
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { GetApp } from '@mui/icons-material';


interface HeaderData {
  name: string;
  description: string;
  imgPath: string;
  resumePath: string;
  links: { name: string, link: string }[];
}

export default function Header(prop: { data: HeaderData, language: string, toggleLanguage: any }) {
  const theme = useTheme();
  const context = React.useContext(Context);
  return (
    <Grid container pt={6} justifyContent="space-between">
      <Grid container spacing={4} alignItems="start">
        <Grid>
          <Avatar
            alt="Avatar image"
            src={prop.data.imgPath}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>

        <Grid>
          <Typography variant="h1" mb={0} gutterBottom fontWeight={700} fontSize="3rem">
            {prop.data.name}
          </Typography>

          <Typography variant="body2" gutterBottom fontWeight={600} color="#718096">
            {prop.data.description}
          </Typography>

          <Grid container pl={2} columnSpacing={4} pt={4}>
            {
              prop.data.links.map(link =>
                <Grid pl={0}>
                  <Link textTransform={"uppercase"} target={"_blank"} fontWeight={600} fontSize=".75rem" color="#718096" underline="none" href={link.link}>
                    {link.name}
                  </Link>
                </Grid>
              )
            }
          </Grid>

        </Grid>
      </Grid>
      <Grid>
        <IconButton sx={{ ml: 1 }} onClick={prop.toggleLanguage} color="inherit">
          {prop.language == 'en' ? 'pt' : 'en'}
        </IconButton>

        <IconButton sx={{ ml: 1 }} onClick={context.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Button
          sx={{ ml: 1 }}
          variant="contained"
          color="inherit"
          size="small"
          startIcon={<GetApp />}
          component={Link}
          href={prop.data.resumePath}
          download="RodrigoMilitaoResume.pdf"
        >
          PDF
        </Button>
      </Grid>
    </Grid>
  )
}
