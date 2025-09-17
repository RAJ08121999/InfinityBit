import { getPupils } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import type { Pupil } from "@/lib/pupilType";
import Spinner from "@/assets/Spinner";

const PupilsList = () => {
  const {data:pupils, isLoading, isError, error} = useQuery({
    queryKey:['pupils'],
    queryFn:()=>getPupils(),
  });

  if(isLoading) return <Spinner/>;
  if(isError) return <div className="text-xl text-red-600 text-center ">Error in Fetching Pupils</div>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>Pupils List</h1>
      <ul>
        {
          pupils?.map(pupil => (
            <li key={pupil._id}>
              {pupil.forename} {pupil.surname} -- {pupil.licenseType}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PupilsList
