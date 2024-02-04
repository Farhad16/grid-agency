import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-8 sm:px-[100px] px-12 mb-10">
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton
          variant="rounded"
          width="100%"
          height={400}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          height={20}
          sx={{ bgcolor: "grey.900" }}
        />
      </div>
    </div>
  );
};

export default ProductSkeleton;
