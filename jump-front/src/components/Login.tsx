const Login = () => {
    const handleLogin = () => {
      window.location.href = 'http://localhost:3000/auth/google';
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-l from-slate-900 via-slate-950 to-slate-950">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <img src='jumpmonkey.png' alt="Jump Monkey Logo" height={400} width={400} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-300 mb-6 tracking-wide uppercase shadow-md p-4 bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg">Welcome to Jump Monkey</h2>
          <div className="flex flex-col items-center bg-slate-500 p-4 rounded-lg mb-6">
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-2">Your go-to platform for exciting games and big wins!</p>
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-2">Play classic games like Rock, Paper, Scissors and stand a chance to win real money.</p>
            <p className="text-lg md:text-xl font-bold text-gray-800">Quick rounds, real-time competition, and seamless gameplay await.</p>
          </div>
          <p className="text-xl font-semibold text-red-600 mb-6">Ready to test your luck?</p>
          <div>
            <button 
              onClick={handleLogin} 
              className="text-lg md:text-xl font-bold text-blue-100 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  