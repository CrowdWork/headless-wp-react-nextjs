/**
 * Import Link from next/link which is already baked into Next.js.
 * It operates in much the same way that Link from react-router-dom would.
 *  --> Wrap the <a href> in the Link component
 */
import Link from "next/link";

export default () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a href="/">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a href="/posts">Posts</a>
        </Link>
      </li>
    </ul>
  );
};
