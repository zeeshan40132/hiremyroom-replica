const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms.html'));
});

app.get('/rooms/apartments', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.get('/rooms/detail/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room1.html'));
});

app.get('/rooms/detail/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room2.html'));
});
app.get('/rooms/detail/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room3.html'));
});
app.get('/rooms/detail/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room4.html'));
});
app.get('/rooms/detail/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room5.html'));
});
app.get('/rooms/detail/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room6.html'));
});
app.get('/rooms/detail/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room7.html'));
});
app.get('/rooms/detail/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room8.html'));
});


app.get('/rooms/detail/9', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room9.html'));
});

app.get('/rooms/detail/10', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room10.html'));
});

app.get('/rooms/detail/11', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room11.html'));
});
app.get('/rooms/detail/12', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room12.html'));
});
app.get('/rooms/detail/13', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room13.html'));
});
app.get('/rooms/detail/14', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rooms/room14.html'));
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});




app.get('/rooms/apartments/detail/1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment1.html'));
});

app.get('/rooms/apartments/detail/2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment2.html'));
});


app.get('/rooms/apartments/detail/3', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment3.html'));
});

app.get('/rooms/apartments/detail/4', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment4.html'));
});


app.get('/rooms/apartments/detail/5', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment5.html'));
});

app.get('/rooms/apartments/detail/6', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment6.html'));
});

app.get('/rooms/apartments/detail/7', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment7.html'));
});

app.get('/rooms/apartments/detail/8', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'apartments/apartment8.html'));
});




app.get('/rooms/normal-rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category-rooms/normal-rooms.html'));
});

app.get('/rooms/luxury-rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category-rooms/luxury-rooms.html'));
});

app.get('/rooms/vip-rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category-rooms/vip-rooms.html'));
});

app.get('/rooms/vvip-rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category-rooms/vvip-rooms.html'));
});

app.get('/rooms/married-couple-rooms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'category-rooms/married-couple-rooms.html'));
});