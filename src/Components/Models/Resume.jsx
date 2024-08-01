import "./resume.scss";

function Resume({setOpen,open}) {
  return (
    <div className="resume" style={{transform:`url(${open?"translate-X(0px)":""})`}}>
        {/* <iframe src="https://drive.google.com/file/d/1gdh8i86-g1GtypREJFPxf0CCL1lIPPIp/preview" width="640" height="480" allow="autoplay"></iframe> */}
      <div className="container">
        <div className="button">
          <button>Close</button>
        </div>
        <div className="headings">
          <h1>Hey thanks for checking out my resume!!!!</h1>
        </div>
      </div>
      <iframe src="https://drive.google.com/file/d/1gdh8i86-g1GtypREJFPxf0CCL1lIPPIp/preview" width="640" height="480" allow="autoplay"></iframe>
      {/* <embed
        src="/Resume/Suman_gupta_Resume.pdf"
        type="application/pdf"
        className="res-1"
      /> */}
    </div>
  );
}

export default Resume;
