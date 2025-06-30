export default{
  "index": "Introduction",
  "quickstart": "Quickstart",
  "pricing": "Pricing",
  '--': {
    type: 'separator',
    title: (
      <div className="flex items-center gap-2">
        <MyLogo />
        {children}
      </div>
    )
  },
  "examples": "Examples"
};
