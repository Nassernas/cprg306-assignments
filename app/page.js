import Link from "next/link";

export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-cyan-300 text-2xl";
  return (
      <main className="bg-gray-800 p-5 text-white">
        <h1 className="text-4xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li>
            <Link href="./week-2/" className={linkStyles}>Week 2 Assignment</Link>
          </li>
          <li>
            <Link href="./week-3/" className={linkStyles}>Week 3 Assignment</Link>
          </li>
        </ul>
      </main>
    

  );

}
