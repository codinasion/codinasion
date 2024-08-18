export default function LoadingPage(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center">
      <span className="loading loading-infinity loading-lg text-success"></span>
      <span>Loading...</span>
    </div>
  );
}
