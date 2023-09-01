const SocialShareButton = ({url,platform}) => {

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        window.open(
          platform + url,
          '_blank',
          'width=500,height=400'
        );
      }}
    >
      Share on Twitter
    </button>
  );
};

export default SocialShareButton;