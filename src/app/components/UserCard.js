export default function UserCard({ user }) {
    return (
        <div className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-200">
            <div className="flex items-center gap-4">
                <img
                    src={user.picture.medium}
                    alt={user.name.first}
                    className="rounded-full w-14 h-14 border"
                />
                <div>
                    <h2 className="text-lg text-black font-medium">
                        {user.name.first} {user.name.last}
                    </h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-500">{user.location.city}</p>
                </div>
            </div>
        </div>
    )
}
  