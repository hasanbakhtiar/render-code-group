// components/cache-info.tsx
type Props = { fetchedAt: string };

export function CacheInfo({ fetchedAt }: Props) {
  return (
    <div className="rounded-md bg-gray-100 p-3 text-sm">
      <p>Data API-dən çəkilib: {new Date(fetchedAt).toLocaleTimeString("az-AZ")}</p>
      <p className="text-gray-500">
        Səhifəni yenilədikdə bu vaxt dəyişmirsə, data cache-dən gəlir.
      </p>
    </div>
  );
}