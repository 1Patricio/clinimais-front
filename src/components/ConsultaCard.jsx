import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function ConsultaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/consulta-card.webp"
          alt="Agendamento de consulta"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Agendamento de Consultas
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Priorize o seu bem-estar
            <br />
            Marque consultas regulares e previna doenças
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component= {Link} to="/consultas">
          Marque uma consulta
        </Button>
      </CardActions>
    </Card>
  );
}