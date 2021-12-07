<script>
var wrap = $("#date");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 247) {
    wrap.addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});
</script>