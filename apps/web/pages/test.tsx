export default function TestPage() {
  return (
    <div className="container">
      <h1>Test Page</h1>
      <p>This page tests if CSS and components are working correctly.</p>
      
      <div className="card">
        <h3>CSS Test</h3>
        <p>If you can see this card with proper styling, CSS is working.</p>
        <button className="btn btn-primary">Test Button</button>
      </div>
      
      <div className="card-neubrutalism">
        <h3>Neubrutalism Test</h3>
        <p>If you can see this card with bold border and shadow, neubrutalism styles are working.</p>
      </div>
    </div>
  );
} 