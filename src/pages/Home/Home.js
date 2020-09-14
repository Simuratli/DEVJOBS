import React,{Suspense,lazy} from "react";

const Wallpaper = lazy(()=>{return import('../../components/Wallpaper/Wall')})
const Search = lazy(()=>{return import('../../components/Search/Search')})

const home = () => {
  return (
    <div>
      <Suspense>
        <Wallpaper>
          <Suspense>
            <Search />
          </Suspense>
        </Wallpaper>
      </Suspense>
    </div>
  );
};

export default home;
