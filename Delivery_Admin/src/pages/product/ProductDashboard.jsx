import { Active, ActiveRes, DashCards } from "../../components";

const ProductDashboard = () => {
  return (
 
   <div className="mx-auto max-w-screen-2xl  md:p-2 2xl:p-10">
      <DashCards />
      <div className="active mt-4 rounded">
      <Active />
      </div>
      <div className="active mt-4 rounded">
      <ActiveRes />
      </div>
    </div>

  );
};

export default ProductDashboard;
