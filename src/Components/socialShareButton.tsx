const SocialShareButton = ({url,platform,children}) => {

  return (
    <button
      type="button"
      className=" btn-primary"
      onClick={() => {
        window.open(
          platform + url,
          '_blank',
          'width=500,height=400'
        );
      }}
    >
      {children}
    </button>
  );
};

export default SocialShareButton;