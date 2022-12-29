import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

interface SectionTitle {
  name: string;
  content: { name: string, link: string, text: string }[];
}

export default function Section(prop: SectionTitle) {
  return (
    <Grid container pt={6} spacing={2} alignItems="start">
      <Grid lg={2}>
        <Typography variant="h6" gutterBottom color={"#718096"} fontWeight={300} fontSize={".875rem"}>
          {prop.name}
        </Typography>
      </Grid>

      <Grid lg={10}>
          {prop.content.map(content => 
            <>
              {(content.name != "") && 
              content.link != "" ?
              <Link target={"_blank"} fontWeight={600} underline="hover" color="inherit" variant="h6" href={content.link}>
                {content.name}
              </Link> :
              <Typography variant="h6" gutterBottom fontWeight={600}>
                {content.name}
              </Typography>
              }
              <Typography variant="body1" pb={3} gutterBottom color={"#718096"}>
                {content.text}
              </Typography>
            </>
            )}
      </Grid>
    </Grid>
  )
}
