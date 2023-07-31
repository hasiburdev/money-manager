import { Header } from '@money-manager/ui';
// import styles from './page.module.scss';
import {APIResponse, API_URL} from '@money-manager/types';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  // const response = await fetch(API_URL);
  // console.log(response);
  // const data = await response.json() as APIResponse;
  // console.log(data);
  return (
    <div>
      <div className="">
        <Header />
        
        <div><h1 className='text-blue-500 font-bold bg-black'>Hello</h1></div>
      </div>
    </div>
  );
}
