import styles from "./PaginationLayout.module.css";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function PaginationLayout({ setPage, totalPage }) {
  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <Pagination
          count={totalPage ? totalPage : 10}
          variant="outlined"
          onChange={(e) => {
            window.scrollTo(0, 0);
            setPage(+e.target.textContent);
          }}
          renderItem={(item) => (
            <PaginationItem
              style={
                item.selected
                  ? {
                      color: "var(--color-primary)",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-bg)",
                    }
                  : {
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      color: "var(--color-primary)",
                      backgroundColor: "var(--color-second)",
                    }
              }
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
}
export { PaginationLayout };
