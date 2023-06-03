import { Breadcrumb } from "@/shared";

export default async function Loading() {
  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
          },
          {
            title: "Program",
          },
          {
            title: "Language",
          },
        ]}
      />

      <div className="gridanimate-pulse">
        <div className="h-64 bg-gray-500 rounded"></div>
      </div>
    </>
  );
}
