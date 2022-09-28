function Image({ className = null, src = null, alt = null, ...props }) {
    return <img className={className} src={src} alt={alt} {...props} />;
}

export default Image;
