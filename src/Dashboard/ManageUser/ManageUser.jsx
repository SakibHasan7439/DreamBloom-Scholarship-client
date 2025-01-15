import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  
  const handleDeleteUser = (user) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`)
            .then((res) =>{
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });  
                }
            })
        }
      });
  }

  const handleUserRoleChange = (id, newRole) =>{
    axiosSecure.patch(`/users/${id}`, { role:newRole })
    .then(res =>{
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                title: "Role changed",
                text: `Role changed to ${newRole}`,
                icon: "success"
              });
        }
    })

  }
  
  return (
    <div>
      <h2 className="text-center text-xl md:text-2xl">Manage All Users</h2>

      {
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <select onChange={(e)=>handleUserRoleChange(user._id, e.target.value)} value={user.role} className="select outline-none w-full max-w-xs">
                      <option>user</option>
                      <option>Moderator</option>
                      <option>Admin</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={()=>handleDeleteUser(user)} className="text-xl">
                        <AiFillDelete></AiFillDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default ManageUser;
