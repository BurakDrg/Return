package com.example.burak.orderlist.Pages

import android.app.Activity
import android.os.Bundle
import android.os.Handler
import android.support.design.widget.TextInputLayout
import android.support.v4.app.Fragment
import android.support.v4.content.ContextCompat.getSystemService
import com.example.burak.orderlist.R
import kotlinx.android.synthetic.main.page_order.*
import android.support.v4.os.HandlerCompat.postDelayed
import android.view.*
import android.view.inputmethod.EditorInfo
import android.view.inputmethod.InputMethodManager
import android.widget.*


class Order : Fragment(), View.OnClickListener, TextView.OnEditorActionListener{

    companion object {
        var searchtext : String = ""
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val rootView = inflater.inflate(R.layout.page_order, container, false)

        val editlayout = rootView.findViewById<LinearLayout>(R.id.edit_layout)
        val searchbar = editlayout.findViewById<EditText>(R.id.search_bar)
        val closesearch = rootView.findViewById<ImageButton>(R.id.close_search)

        searchbar.isCursorVisible = false
        searchbar.requestFocus()
        searchbar.setText(searchtext)
        //searchbar.setPadding(70.dp,0,130,0) ₺
        if (!searchtext.isEmpty()) searchbar.textAlignment = View.TEXT_ALIGNMENT_VIEW_START

        searchbar.setOnClickListener(this)
        searchbar.setOnEditorActionListener(this)
        closesearch.setOnClickListener(this)

        return rootView
    }

    override fun onClick(v: View) {
        val inputMethodManager = activity?.getSystemService(Activity.INPUT_METHOD_SERVICE) as InputMethodManager
        when (v.id){
            R.id.search_bar -> {
                search_bar.isCursorVisible = true
                close_search.visibility = View.VISIBLE
                search_bar.textAlignment = View.TEXT_ALIGNMENT_VIEW_START
            }
            R.id.close_search -> {
                if(search_bar.text.toString().isEmpty()){
                    search_bar.isCursorVisible = false
                    search_bar.textAlignment = View.TEXT_ALIGNMENT_CENTER
                    close_search.visibility = View.INVISIBLE
                    inputMethodManager.hideSoftInputFromWindow(view?.windowToken, 0)
                }
                else {
                    search_bar.text.clear()
                    searchtext = search_bar.text.toString()
                }
            }
        }
    }

    override fun onEditorAction(v: TextView?, a: Int, e: KeyEvent?): Boolean {
        val inputMethodManager = activity?.getSystemService(Activity.INPUT_METHOD_SERVICE) as InputMethodManager
        if(a == EditorInfo.IME_ACTION_SEARCH){
            searchtext = search_bar.text.toString()
            close_search.visibility = View.INVISIBLE
            search_bar.isCursorVisible = false
            inputMethodManager.hideSoftInputFromWindow(view?.windowToken, 0)
            ShoppingCart.rvAdapter.addItem(search_bar.text.toString())
            return true
        }
        return false
    }
}