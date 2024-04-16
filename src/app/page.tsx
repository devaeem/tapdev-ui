import AdminLayout from "@/components/Layout/admin/adminLayout";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col items-center uppercase gap-3 p-5">
          <Typography
            gutterBottom
            className="text-center md:text-8xl sm:text-1xl"
          >
            wellcome to tapdev
          </Typography>
        </div>
      </div>
    </>
    // <AdminLayout>
    //   <h1>content Main</h1>
    // </AdminLayout>
  );
}
