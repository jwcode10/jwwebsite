interface AuthorInfoProps {
  name: string;
  role?: string;
  avatar?: string;
}

export function AuthorInfo({ name, role, avatar }: AuthorInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-medium overflow-hidden">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-lg">{name.charAt(0)}</span>
        )}
      </div>
      <div className="text-left">
        <p className="text-sm font-medium">
          By <span className="underline decoration-1 underline-offset-2">{name}</span>
          {role ? <span className="text-gray-600"> {role}</span> : null}
        </p>
      </div>
    </div>
  );
}

