import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography,
  } from "@mui/material";

export default function Card_({ title, children }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full border border-gray-200">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div className="text-gray-700 text-sm">
          {children}
        </div>
      </div>
    );
  }
  
  export function MaterialCard({ title, subtitle, children }) {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm w-full overflow-hidden border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
          <div className="text-gray-700 text-sm">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  export function NewsCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/300/200"
          alt="랜덤 이미지"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            카드 제목
          </Typography>
          <Typography variant="body2" color="text.secondary">
            여기에 카드 내용을 작성해보세요.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">자세히</Button>
        </CardActions>
      </Card>
    );
  }