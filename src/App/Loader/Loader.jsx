import { Bars } from 'react-loader-spinner';
import { WraperLoader } from './Loader.styled';

export const Loader = () => {
  <WraperLoader>
    <Bars
      height="80"
      width="80"
      color="#1e2939"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    ;
  </WraperLoader>;
};
