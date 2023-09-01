const SocialShareButton = () => {
  const url = 'https://example.com';

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        window.open(
          'https://twitter.com/intent/tweet?url=' + url,
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