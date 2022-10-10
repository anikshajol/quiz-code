export default function ErrorPage() {
  return (
    <div className="text-2xl flex flex-col justify-center items-center absolute inset-0">
      <h1 className="font-bold">Oops!</h1>
      <p className="text-red-500 font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
}
