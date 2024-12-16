```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

function MyComponent() {
  const router = useRouter(); // Initialize router

  const handleClick = (href) => {
    router.push(href); // Use router.push for navigation
  };

  return (
    <div>
      <a href="/" onClick={() => handleClick('/')}>Home</a> 
      <a href="/about" onClick={() => handleClick('/about')}>About</a> 
    </div>
  );
}

export default MyComponent;
```