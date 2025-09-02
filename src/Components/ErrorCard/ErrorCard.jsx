
export default function ErrorCard({ errorMsg }) {
  return (
    <div className="mb-6 p-4 bg-red-200 border border-red-200 rounded-xl">
      <div className="row">
        <p className="text-red-700 text-sm font-medium">{errorMsg}</p>
      </div>
    </div>
  );
}
