import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function MedicoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/clinimais-medicos.avif"
          alt="Agendamento de consulta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cadastrar Médicos
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Você em boas mãos
            <br />
            Confie em profissionais que cuidam de você
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component= {Link} to="/medicos">
          Cadastrar Médico
        </Button>
      </CardActions>
    </Card>
  );
}