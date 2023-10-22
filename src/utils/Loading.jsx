import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Loading = () => {
  return (
    <div className="col">
      <div className="card">
        <SkeletonTheme color="#ebebeb" highlightColor="#f5f5f5">
          <Skeleton height={300} />
        </SkeletonTheme>
      </div>
    </div>
  );
};
