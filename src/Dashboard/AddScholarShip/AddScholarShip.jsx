import axios from "axios";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddScholarShip = () => {
    const { user } = UseAuth();
    const { register, handleSubmit} = useForm();
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]};
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if(res.data.success) {
            const scholarshipData = {
                scholarshipName: data.scholarshipName,
                universityName: data.universityName,
                image: res.data.data.display_url,
                universityCountry: data.universityCountry,
                universityCity: data.universityCity,
                subjectCategory: data.subjectCategory,
                scholarshipCategory: data.scholarshipCategory,
                tuitionFees: data.tuitionFees,
                applicationFees: parseFloat(data.applicationFees),
                universityWorldRank: data.universityWorldRank,
                applicationDeadline: data.applicationDeadline,
                serviceCharge: parseFloat(data.serviceCharge),
                postDate: data.postDate,
                degree: data.degree,
                postedEmail: user.email
                
            }
            const scholarshipResponse = await axiosSecure.post('/scholarships', scholarshipData);
            if(scholarshipResponse.data.insertedId) {
                Swal.fire({
                    title: "Successful",
                    text: "Data stored Successful",
                    icon: "success"
                  });
            }
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-center flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <label>ScholarShip Name</label>
          <input
            type="text"
            placeholder="Type here"
            {...register("scholarshipName")}
            className="input input-bordered w-full block mb-4"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>University Name</label>
          <input
            type="text"
            {...register("universityName")}
            placeholder="Type here"
            className="input input-bordered w-full block"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>ScholarShip Image</label>
          <input
            type="file"
            accept="Image/*"
            {...register("image", { required: true })}
            placeholder="Type here"
            className="w-full block"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>University Country</label>
          <input
            type="text"
            placeholder="Type here"
            {...register("universityCountry")}
            className="input input-bordered block w-full"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>University City</label>
          <input
            type="text"
            {...register("universityCity")}
            className="input input-bordered block w-full"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>University World Rank</label>
          <input
            type="text"
            {...register("universityWorldRank")}
            className="input input-bordered block w-full"
          />
        </div>

        <div className="md:w-1/2 p-4">
          <label>Subject Category</label>
          <select defaultValue={"default"} {...register("subjectCategory")} className="select select-bordered w-full">
            <option disabled value={"default"}>
            Choose a Subject
            </option>
            <option>Agriculture</option>
            <option>Engineering</option>
            <option>Doctor</option>
          </select>
        </div>

        <div className="md:w-1/2 p-4">
          <label>Scholarship category</label>
          <select {...register("scholarshipCategory")} className="select select-bordered w-full">
            <option disabled value={"default"}>
            Choose a ScholarShip
            </option>
            <option>Full Funded</option>
            <option>Partial</option>
            <option>Self Funded</option>
          </select>
        </div>

        <div className="md:w-1/2 p-4">
          <label>Degree </label>
          <select defaultValue={"default"} {...register("degree")} className="select select-bordered w-full">
            <option disabled value={"default"}>
            Choose a Degree
            </option>
            <option>Diploma</option>
            <option>Bachelor</option>
            <option>Masters</option>
          </select>
        </div>
        
        <div className="md:w-1/2 p-4">
          <label>Tuition fees</label>
          <input
            type="text"
            {...register("tuitionFees")}
            placeholder="Type here"
            className="input input-bordered block w-full"
          />
        </div>
        
        <div className="md:w-1/2 p-4">
          <label>Application fees</label>
          <input
            type="number"
            {...register("applicationFees")}
            placeholder="Type here"
            className="input input-bordered block w-full"
          />
        </div>
        
        <div className="md:w-1/2 p-4">
          <label>Application Deadline</label>
          <input
            type="date"
            {...register("applicationDeadline")}
            placeholder="Type here"
            className="input input-bordered block w-full"
          />
        </div>
        
        <div className="md:w-1/2 p-4">
          <label>Service charge</label>
          <input
            type="number"
            {...register("serviceCharge")}
            placeholder="Type here"
            className="input input-bordered block w-full"
          />
        </div>
        
        <div className="md:w-1/2 p-4">
          <label>Scholarship post date</label>
          <input
            type="date"
            {...register("postDate")}
            placeholder="Type here"
            className="input input-bordered block w-full"
          />
        </div>
        <div className="w-full p-4">
            <input type="submit" className="input bg-[#93c5fd] transition cursor-pointer hover:bg-[#386eac] input-bordered block w-full" />
        </div>
      </form>
    </div>
  );
};

export default AddScholarShip;
