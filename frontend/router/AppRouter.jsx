

export default function AppRouter(){
    return (
        <browserRouter>
            <routes>

                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Route Login */}
                <Route path="/login" element={<LoginPage />} />
                {/* Import route Seller */}
                {UserRouter}
                {/* Import route Seller */}
                {SellerRouter}
                {/* Có thể thêm route cho Buyer, Admin ở đây */}

                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </routes>
        </browserRouter>
    )
}