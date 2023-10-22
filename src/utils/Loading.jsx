import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="col">
      <div className="card">
        <SkeletonTheme color="#ebebeb" highlightColor="#f5f5f5">
          <Skeleton height={207} />
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default Loading;