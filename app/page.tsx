import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">React Projects</h1>
      <ol className="list-decimal list-inside text-lg space-y-2">
        <li>
          <Link href="/expense-tracker">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Expense Tracker
            </span>
          </Link>
        </li>
        <li>
          <Link href="/expense-tracker">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Expense Tracker
            </span>
          </Link>
        </li>
        <li>
          <Link href="/expense-tracker">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Expense Tracker
            </span>
          </Link>
        </li>
      </ol>
    </div>
  );
}
