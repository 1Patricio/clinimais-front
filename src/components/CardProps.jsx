import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

/**
 * CardProps - Componente reutilizável para exibir cards de ação.
 * Props:
 *  - title: título do card
 *  - subtitle: subtítulo do card (opcional)
 *  - secondary: texto secundário (opcional)
 *  - entity: texto do botão
 *  - imageCard: caminho da imagem
 *  - to: rota de navegação ao clicar no botão (opcional, padrão: '/')
 */
export default function CardProps({
  title,
  subtitle,
  secondary,
  entity,
  imageCard,
  to = '/'
}) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageCard}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          {(subtitle || secondary) && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
              {subtitle && secondary && <br />}
              {secondary}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={to}
          sx={{ fontWeight: 'bold', borderRadius: 2 }}
        >
          {entity}
        </Button>
      </CardActions>
          </Card>
  );
}