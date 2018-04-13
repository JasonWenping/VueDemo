<template>
<div class="footer navbar-fixed-bottom">
    <footer class="text-muted" id="footer">
        <div class="container">
            <p>Powered By Jason 2018-04-13</p>
        </div>
    </footer>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer{
    background-color: #eee;
    border-top: 1px solid #ccc;
    min-height: 50px;
    display: flex;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>


