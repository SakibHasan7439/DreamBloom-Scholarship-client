import { useLoaderData } from "react-router-dom";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { format } from "date-fns";

const UpdateUserReview = () => {
  const review = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  const {comment, rating, _id} = review;

  const handleUpdate = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const date = format(new Date(), 'P');
    const reviewInfo = {rating, comment, date};

    const res = await axiosSecure.patch(`review/${_id}`, reviewInfo);
    if(res.data.modifiedCount > 0){
        Swal.fire({
            title: "Successful",
            text: "Data updated Successful",
            icon: "success"
        });
    }
  }
  
  return (
    <div className="max-w-2xl rounded-lg mt-20 w-full border-2 mx-auto">
    <form onSubmit={handleUpdate} className="card-body shadow-xl">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Give us your valuable rating</span>
        </label>
        <input
            type="number"
            defaultValue={rating}
            placeholder="rating"
            max={5}
            name="rating"
            className="input input-bordered"
            required
        />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Comment Box</span>
        </label>
        <textarea defaultValue={comment} name="comment" className="w-full h-[100px] border rounded-md p-2">

        </textarea>
        </div>
        <div className="form-control mt-6">
        <button className="btn bg-[#93c5fd] hover:bg-[#6093cd] hover:text-white transition-all">Update Review</button>
        </div>
    </form>
    </div>
  );
};

export default UpdateUserReview;
