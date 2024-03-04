const DotLine = ({ primaryColor, center }) => {
  return (
    <>
      <div style={styles.dot_line_wrapper}>
        <div
          className={center ? "center_dot" : ""}
          style={primaryColor ? styles.primary_dot : styles.secondary_dot}
        ></div>

        <div
          style={primaryColor ? styles.primary_line : styles.secondary_line}
        ></div>
      </div>
    </>
  );
};

const styles = {
  dot_line_wrapper: {
    position: "relative",
  },

  primary_dot: {
    position: "absolute",
    top: "-5px",
    width: "10px",
    height: "10px",
    backgroundColor: "#e45447",
    borderRadius: "50px",
  },

  primary_line: {
    width: "130px",
    height: "2px",
    backgroundColor: "#e45447",
  },
  secondary_dot: {
    position: "absolute",
    top: "-5px",
    width: "10px",
    height: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "50px",
  },
  secondary_line: {
    width: "130px",
    height: "2px",
    backgroundColor: "#ffffff",
  },
};

export default DotLine;
