export default function GroupsLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-24 pt-10">
            <p className="mb-6 text-xs uppercase tracking-wide text-gray-400">
                StudyBoard / Groups
            </p>
            {children}
        </div>
    );
}