import BetStatistics from "../BetStatistics";
import Balance from "./Balance";
import { useUser } from "./useUser";

const UserDetails = () => {
  const { data: user } = useUser();
  const { firstName = "", lastName = "", preferredCurrency = "" } = user ?? {};

  return (
    <>
      <div className="bg-gray-800 px-4 py-3 md:px-8 md:py-6 flex flex-col sm:flex-row justify-between rounded-xl shadow-lg text-white space-y-6 sm:space-y-0 sm:space-x-6">
        <div>
          <ul className="flex flex-col space-y-1 text-sm md:text-lg font-semibold">
            <li className="font-roboto">Firstname: {firstName}</li>
            <li>Lastname: {lastName}</li>
            <li>Preffered Currency: {preferredCurrency}</li>
          </ul>
          <Balance />
        </div>
        <BetStatistics />
      </div>
    </>
  );
};

export default UserDetails;
