import React from 'react';
import Slider from 'react-slick';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: 'Jenny Wilson',
    rating: 4,
    review: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    review: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Devon Lane',
    rating: 4,
    review: 'Normally wings are wings, but theirs are lean, meaty, and tender, and served with a sauce that was both sweet and spicy.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
];

const Rating = styled('div')(({ theme }) => ({
  color: '#f4c150',
  fontSize: '16px',
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const CustomerReviews = () => {
  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" gutterBottom align="center">
        Customer's Feedback
      </Typography>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box key={index} p={2}>
            <Card>
              <CardHeader
                avatar={<Avatar src={review.avatar} />}
                title={review.name}
                subheader={<Rating>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</Rating>}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default CustomerReviews;
