
const bookElement = document.getElementById('book')
const fontSizeControls = document.querySelectorAll('.font-size')
    
fontSizeControls.forEach(control => {
    control.addEventListener('click', function(e) {
        e.preventDefault()
            
        fontSizeControls.forEach(item => {
            item.classList.remove('font-size_active')
        })
            
        this.classList.add('font-size_active')
            
        const size = this.dataset.size
            
        bookElement.classList.remove('book_fs-small', 'book_fs-big')
            
        if (size === 'small') {
            bookElement.classList.add('book_fs-small')
        } else if (size === 'big') {
            bookElement.classList.add('book_fs-big')
        }
    })
})
