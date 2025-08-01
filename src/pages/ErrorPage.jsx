function ErrorPage() {
  return (
    <main className="container mx-auto px-4 text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you’re looking for does not exist.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back home
      </a>
    </main>
  );
}

export default ErrorPage;
