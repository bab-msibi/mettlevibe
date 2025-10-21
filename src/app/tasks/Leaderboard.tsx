import { useEffect, useState } from "react";

interface Address {
  suite: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  points?: number;
  rank?: number;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();

      const cleaned = data
        .map((user) => {
          const suite = user?.address?.suite ?? "";
          const points = parseInt(suite.replace(/\D/g, ""), 10) || 0;
          return { ...user, points };
        })
        .sort((a, b) => (b.points ?? 0) - (a.points ?? 0))
        .slice(0, 10)
        .map((user, index) => ({
          ...user,
          rank: index + 1,
        }));

      setUsers(cleaned);
    };

    fetchData();
  }, []);

    const getRankStyle = (rank: number) => {
    if (rank === 1) return "bg-yellow-500/20 text-yellow-300 font-semibold";
    if (rank === 2) return "bg-yellow-500/20 text-yellow-300 font-semibold";
    if (rank === 3) return "bg-yellow-500/20 text-yellow-300 font-semibold";
    return "";
  };


  return (
    <div className="flex justify-center mt-8 ">
      <div className="bg-black-sec text-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full sm:w-[600px] md:w-[900px] lg:w-[1300px] text-left border-collapse  overflow-hidden">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 border-b border-gray-700">Rank</th>
              <th className="px-6 py-3 border-b border-gray-700">Name</th>
              <th className="px-6 py-3 border-b border-gray-700 text-right">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`border-b border-gray-800 hover:bg-gray-800 transition ${getRankStyle(
                  user.rank!
                )}`}
              >
                <td className="px-6 py-3 text-center">{user.rank}</td>
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3 text-right font-semibold">
                  {user.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
