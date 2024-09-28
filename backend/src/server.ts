import express from 'express';
import session from 'express-session';
import passport from 'passport';
import './passport'; // This imports the Passport OAuth configuration

const app = express();

// Session middleware (to manage user sessions)
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// Initialize Passport and handle user sessions
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth route
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// OAuth callback route
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard'); // Redirect to dashboard on successful login
});

// Protected route example (requires authentication)
app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user as any;
    res.send(`
        <h1>Welcome ${user.displayName || `${user.name?.givenName} ${user.name?.familyName}` || 'User'}</h1>
        <p>Your email: ${user.email || user.emails?.[0]?.value || 'No email available'}</p>
        <img src="${user.picture || user.photos?.[0]?.value || '/default-avatar.png'}" alt="Profile Picture" />
        <pre>${JSON.stringify(user, null, 2)}</pre>
      `);
  } else {
    res.redirect('/');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
